// import { Router } from "express";
// import AppServiceProvider from "../../../../app/Providers/AppServiceProvider";
// import { PaymentController } from "../../../app/Http/Controllers/PaymentController";
// require('dotenv').config();

// class vnpay {
//     private paymentController: PaymentController;
//     router = Router();

//     constructor() {
//         this.paymentController = AppServiceProvider.getContainer().resolve(PaymentController);
//         this.intializeRoutes();
//     }

//     intializeRoutes() {
//         const payment = this.paymentController.CreatePayment.bind(this.paymentController);
//         const ipn = this.paymentController.IPN.bind(this.paymentController);
//         const vnpayreturn = this.paymentController.ReturnPayment.bind(this.paymentController);

//         this.router.get("/vnpay", payment);
//         this.router.get("/vnpay-ipn", ipn);
//         this.router.get("/vnpay-return", vnpayreturn);
//     }
// };

// export default new vnpay().router;