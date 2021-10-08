package com.ceniza.spongebobclothes.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="spongebobclothes")
public class Clothe implements Serializable {
private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	long id;
	@Column(name="model")
	String model;
	@Column(name="prize")
	int prize;
	@Column(name="img")
	String img;

	
	public Clothe(String model,int prize,String img) {
		super();
		this.model = model;
		this.prize = prize;
		this.img = img;		
	}
	

	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getModel() {
		return model;
	}


	public void setModel(String model) {
		this.model = model;
	}


	public String getImg() {
		return img;
	}


	public void setImg(String img) {
		this.img = img;
	}


	public int getPrize() {
		return prize;
	}


	public void setPrize(int prize) {
		this.prize = prize;
	}


	public Clothe() {}
}
