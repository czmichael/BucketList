package com.bl.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.bl.dao.UserDao;
import com.bl.data.model.User;
import com.bl.services.UserService;


@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	@Qualifier("userDao")
	private UserDao userDao;

	@Override
	public User getUserById(int id) {
		return userDao.getUserByUserId(id);
	}

	@Override
	public User getUserByLogin(String username) {
		return userDao.getUserByLogin(username);
	}
}
