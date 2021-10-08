package com.ceniza.spongebobclothes.entity.services;

import java.util.List;
import java.util.Optional;

import com.ceniza.spongebobclothes.entity.models.Basket;

public interface IBasketService {
	List<Basket> getAll();
	Optional<Basket> getOne(long idItem);
	void add(Basket item);
	void delete(long idItem);
	void update(Basket item, long id);
}
