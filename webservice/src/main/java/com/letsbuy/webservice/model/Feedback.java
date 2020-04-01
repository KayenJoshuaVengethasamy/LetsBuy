package com.letsbuy.webservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "feedback")
public class Feedback {

	@Id
	@Column(name = "feedbackID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer feedbackID;

	@Column(name = "feedbackName")
	private String feedbackName;

	@Column(name = "feedbackSurname")
	private String feedbackSurname;

	@Column(name = "feedbackEmail", nullable = false)
	private String feedbackEmail;

	@Column(name = "feedbackContents", nullable = false)
	private String feedbackContents;

	public Integer getFeedbackID() {
		return feedbackID;
	}

	public void setFeedbackID(Integer feedbackID) {
		this.feedbackID = feedbackID;
	}

	public String getFeedbackName() {
		return feedbackName;
	}

	public void setFeedbackName(String feedbackName) {
		this.feedbackName = feedbackName;
	}

	public String getFeedbackSurname() {
		return feedbackSurname;
	}

	public void setFeedbackSurname(String feedbackSurname) {
		this.feedbackSurname = feedbackSurname;
	}

	public String getFeedbackEmail() {
		return feedbackEmail;
	}

	public void setFeedbackEmail(String feedbackEmail) {
		this.feedbackEmail = feedbackEmail;
	}

	public String getFeedbackContents() {
		return feedbackContents;
	}

	public void setFeedbackContents(String feedbackContents) {
		this.feedbackContents = feedbackContents;
	}

}