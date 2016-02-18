package com.bl.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.bl.dao.DataSourceDao;
import com.bl.data.model.DataSource;
import com.bl.data.model.User;
import com.bl.services.DataSourceService;


@Service("dataSourceService")
public class DataSourceServiceImpl implements DataSourceService {
	
	@Autowired
	@Qualifier("dataSourceDao")
	private DataSourceDao dataSourceDao;

	@Override
	public DataSource getDataSourceByUser(User user) {
		return dataSourceDao.getDataSourceByUserId(user.getId());
	}
}
