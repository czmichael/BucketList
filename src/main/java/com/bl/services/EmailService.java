package com.bl.services;

import com.bl.data.model.Email;
import com.bl.data.model.User;


/**
 * Email related services.
 */
public interface EmailService {
	
	/**
	 * Send one Email.
	 */
	public void sendEmail(Email email);
	
	/**
	 * Send a group of Emails
	 */
	public void sendEmails(Email[] email);
	
	/**
	 * Send a message notifying that the user's password has been reset and ready to use.
	 */
	public void notifyPasswordReset(User user, String password);
}
