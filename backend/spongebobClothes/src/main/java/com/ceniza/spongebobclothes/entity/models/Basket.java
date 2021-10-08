package com.ceniza.spongebobclothes.entity.models;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="spongebobbasket")
public class Basket implements Serializable{
private static final long serialVersionUID = 1L;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="id")
long id;
@Column(name="model")
String model;
@Column(name="prize")
int prize;
@Column(name="size")
String size;
@Column(name="img")
String img;
@Column(name="units")
int units;

public Basket(String model , int prize , String size , String img , int units) {
	super();
	this.model = model;
	this.prize = prize;
	this.size = size;
	this.img = img;
	this.units = units;
}
public Basket() {}
public int getUnits() {
	return units;
}
public void setUnits(int units) {
	this.units = units;
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
public int getPrize() {
	return prize;
}
public void setPrize(int prize) {
	this.prize = prize;
}
public String getSize() {
	return size;
}
public void setSize(String size) {
	this.size = size;
}
public String getImg() {
	return img;
}
public void setImg(String img) {
	this.img = img;
}

}
