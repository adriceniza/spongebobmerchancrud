package com.ceniza.spongebobclothes.entity.dao;
import org.springframework.data.repository.CrudRepository;
import com.ceniza.spongebobclothes.entity.models.Basket;

public interface IBasketDao extends CrudRepository<Basket, Long>{

}
