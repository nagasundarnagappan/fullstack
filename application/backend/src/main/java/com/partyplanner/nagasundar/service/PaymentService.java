package com.partyplanner.nagasundar.service;

import java.util.List;

import com.partyplanner.nagasundar.dto.request.PaymentRequest;
import com.partyplanner.nagasundar.dto.response.PaymentResponse;
import com.partyplanner.nagasundar.model.Payment;

public interface PaymentService {
    PaymentResponse createPayment(PaymentRequest request);
    List<Payment> getAllPayments();
    List<Payment> getPaymentsByUserId(String userId);
    // Add additional methods if needed
    Long sumAmounts();
}
