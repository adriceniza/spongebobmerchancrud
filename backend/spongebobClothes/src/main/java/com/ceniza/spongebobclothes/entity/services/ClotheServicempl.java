package com.ceniza.spongebobclothes.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ceniza.spongebobclothes.entity.dao.IShopDao;
import com.ceniza.spongebobclothes.entity.models.Clothe;
@Service
public class ClotheServicempl implements IClotheService{
	@Autowired
	IShopDao shopdao;

	@Override
	public List<Clothe> getAll() {
		return (List<Clothe>) shopdao.findAll();
	}

	@Override
	public void add(Clothe clothe) {
		shopdao.save(clothe);
		}

	@Override
	public void delete(long idClothe) {
		shopdao.deleteById(idClothe);
		
	}

	@Override
	public void update(Clothe clothe, long idClothe) {
		shopdao.findById(idClothe).ifPresent((x)->{
			clothe.setId(idClothe);
			shopdao.save(clothe);
		
		});}
		


	@Override
	public Optional<Clothe> getOne(long idClothe) {
		
		return shopdao.findById(idClothe);
	}
}
