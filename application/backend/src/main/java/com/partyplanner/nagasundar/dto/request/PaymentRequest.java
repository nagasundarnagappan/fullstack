package com.partyplanner.nagasundar.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {

    private String userId;
    private Long amount;
    private Date paidDate;
    private String paymentMethod;

    // Getter and Setter methods if not generated by Lombok

    // public String getUserId() {
    //     return userId;
    // }

    // public void setUserId(String userId) {
    //     this.userId = userId;
    // }

    // public Long getAmount() {
    //     return amount;
    // }

    // public void setAmount(Long amount) {
    //     this.amount = amount;
    // }

    // public Date getPaidDate() {
    //     return paidDate;
    // }

    // public void setPaidDate(Date paidDate) {
    //     this.paidDate = paidDate;
    // }

    // public String getPaymentMethod() {
    //     return paymentMethod;
    // }

    // public void setPaymentMethod(String paymentMethod) {
    //     this.paymentMethod = paymentMethod;
    // }
}
