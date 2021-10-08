package com.ceniza.spongebobclothes.entity.services;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ceniza.spongebobclothes.entity.dao.IBasketDao;
import com.ceniza.spongebobclothes.entity.models.Basket;

@Service
public class BasketServiceImpl  implements IBasketService{
	@Autowired
	IBasketDao basketdao;

	@Override
	public List<Basket> getAll() {
		return (List<Basket>) basketdao.findAll();
	}

	@Override
	public void add(Basket item) {
		basketdao.save(item);
		}

	@Override
	public void delete(long id) {
		basketdao.deleteById(id);
		
	}

	@Override
	public void update(Basket item, long id) {
		basketdao.findById(id).ifPresent((x)->{
			item.setId(id);
			basketdao.save(item);
		
		});}
		


	@Override
	public Optional<Basket> getOne(long idItem) {
		
		return basketdao.findById(idItem);
	}

}
