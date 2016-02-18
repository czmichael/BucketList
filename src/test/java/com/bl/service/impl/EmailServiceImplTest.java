package com.bl.service.impl;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.bl.data.model.Email;
import com.bl.services.EmailService;


@RunWith(JUnit4.class)
public class EmailServiceImplTest {

	private final ApplicationContext applicationContext = new ClassPathXmlApplicationContext(
			"/WEB-INF/applicationContext.xml");
	
	private EmailService emailService;
	
	@Before
	public void prepareTestData() {
		emailService = (EmailService) applicationContext.getBean("emailService");
	}

	@After
	public void cleanupTestData() {}
	
	@Test
	public void testSendEmail() {
	}
}
