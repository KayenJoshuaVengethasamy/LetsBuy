package com.letsbuy.webservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shipment")
public class Shipment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "shipID", nullable = false)
	private Integer shipID;

	@Column(name = "shipname", nullable = false)
	private String shipName;

	@Column(name = "shipCountry", nullable = false)
	private String shipCountry;

	@Column(name = "shipArea", nullable = false)
	private String shipArea;

	@Column(name = "shipAddress", nullable = false)
	private String shipAddress;

	public Integer getShipID() {
		return shipID;
	}

	public void setShipID(Integer shipID) {
		this.shipID = shipID;
	}

	public String getShipName() {
		return shipName;
	}

	public void setShipName(String shipName) {
		this.shipName = shipName;
	}

	public String getShipCountry() {
		return shipCountry;
	}

	public void setShipCountry(String shipCountry) {
		this.shipCountry = shipCountry;
	}

	public String getShipArea() {
		return shipArea;
	}

	public void setShipArea(String shipArea) {
		this.shipArea = shipArea;
	}

	public String getShipAddress() {
		return shipAddress;
	}

	public void setShipAddress(String shipAddress) {
		this.shipAddress = shipAddress;
	}

}