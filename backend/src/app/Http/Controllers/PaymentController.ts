import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import { Request, Response } from "express";
import { InpOrderAlreadyConfirmed, IpnFailChecksum, IpnInvalidAmount, IpnOrderNotFound, IpnResponse, IpnSuccess, IpnUnknownError, ReturnQueryFromVNPay, VNPay, VerifyReturnUrl } from 'vnpay';

const vnpay = new VNPay({
    tmnCode: '5ZYRCTZF',
    secureSecret: 'FQZQDZTALLFMNOLJGSPVGVQOGUPVYCHY',
    api_Host: 'https://sandbox.vnpayment.vn',
    testMode: true, // optional
    hashAlgorithm: 'SHA512', // optional
});

@injectable()
class PaymentController {

    async CreatePayment(req: Request, res: Response) {
        const urlString = await vnpay.buildPaymentUrl({
            vnp_Amount: 10000,
            vnp_IpAddr: '1.1.1.1',
            vnp_TxnRef: '123456',
            vnp_OrderInfo: '123456',
            vnp_OrderType: 'other',
            vnp_ReturnUrl: `http://localhost:3001/payment/vnpay-return`,
        });

        // res.redirect(urlString);
        return res.json({ paymentUrl: urlString });
    }

    async ReturnPayment (req: Request<any, any, any, ReturnQueryFromVNPay>, res: Response) {
        let verify: VerifyReturnUrl;
        try {
            verify = await vnpay.verifyReturnUrl({ ...req.query });
            if (!verify.isVerified) {
                // return res.status(200).json({
                //     message: verify?.message ?? 'Payment failed!',
                //     status: verify.isSuccess,
                // });
                const message1 = {
                    message: verify?.message ?? 'Payment failed!',
                    status: verify.isSuccess,
                };
                return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${message1}`);
            }
        } catch (error) {
            console.log(`verify error: ${error}`);
            // return res.status(400).json({ message: 'verify error', status: false });
            const message2 = { message: 'verify error', status: false };
            return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${message2}`);
        }

        // res.redirect('http://localhost:3000/doctors/appointment/payment?message="Payment successful!"');
        // return res.status(200).json({
        //     message: verify?.message ?? 'Payment successful!',
        //     status: verify.isSuccess,
        // });
        // const message3 = {
        //     message: verify?.message ?? 'Payment successful!',
        //     status: verify.isSuccess,
        // }
        res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${verify?.message}&status=${verify.isSuccess}`);
    } 

    async IPN(req: Request<any, any, any, ReturnQueryFromVNPay>, res: Response<IpnResponse>) {
        try {
            const verify: VerifyReturnUrl = await vnpay.verifyIpnCall({ ...req.query });
            if (!verify.isVerified) {
                // return res.json(IpnFailChecksum);
                return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${IpnFailChecksum}`);
            }

            // Find the order in your database
            // This is the sample order that you need to check the status, amount, etc.
            const foundOrder = {
                orderId: '123456',
                amount: 10000,
                status: 'pending',
            };

            // If the order is not found, or the order id is not matched
            // You can use the orderId to find the order in your database
            if (!foundOrder || verify.vnp_TxnRef !== foundOrder.orderId) {
                // return res.json(IpnOrderNotFound);
                return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${IpnOrderNotFound}`);
            }

            // If the amount is not matched
            if (verify.vnp_Amount !== foundOrder.amount) {
                // return res.json(IpnInvalidAmount);
                return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${IpnInvalidAmount}`);
            }

            // If the order is already confirmed
            if (foundOrder.status === 'completed') {
                // return res.json(InpOrderAlreadyConfirmed);
                return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${InpOrderAlreadyConfirmed}`);
            }

            // Update the order status to completed
            // Eg: Update the order status in your database
            foundOrder.status = 'completed';

            // Then return the success response to VNPay
            // return res.json(IpnSuccess);
            return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${IpnSuccess}`);
        } catch (error) {
            console.log(`verify error: ${error}`);
            // return res.json(IpnUnknownError);
            return res.redirect(`http://localhost:3000/doctors/appointment/payment?message=${IpnUnknownError}`);
        }
    }
};

export { PaymentController };