package com.letsbuy.webservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "card")
public class Card {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Column(name = "cardID", nullable = false)
	private Integer cardID;

	@Column(name = "cardNumber", nullable = false)
	private String cardNumber;

	public Integer getCardID() {
		return cardID;
	}

	public void setCardID(Integer cardID) {
		this.cardID = cardID;
	}

	public String getCardnumber() {
		return cardNumber;
	}

	public void setCardnumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

}