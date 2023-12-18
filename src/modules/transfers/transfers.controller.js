import User from '../users/user.model.js';
import { UserService } from '../users/user.service.js';

export const makeTransfer = async (req, res) => {
  try {
    
    const { amount, accountNumberRecipient, accountNumberSender } = req.body;
    
    const recipientUser = await UserService.findOneAccount(
      accountNumberRecipient
    );

    if (!recipientUser) {
      return res.status(400).json({
        message: 'Recipient account does not exist 🔍',
      });
    }

    const senderUser = await UserService.findOneAccount(accountNumberSender)
    
    if (!senderUser) {
      return res.status(400).json({
        message: 'Sender account does not exist 🔍',
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
