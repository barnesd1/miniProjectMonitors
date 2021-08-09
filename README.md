# https://github.com/barnesd1/miniProjectMonitors by David J. Barnes
# This is a Mini Project for the NatWest QA Software Engineer Course - A CRUD Website for Selling Computer Monitors (from the Admin perspective)
#
# Tools used:
#    • Spring Tools Suite 4
#    • Java with Spring API
#    • MySql Workbench and local db instance
#    • Javascript
#    • HTML
#    • Postman
#    • Git Bash
#    • Apache Tomcat
#
# Usage:
#    • Run MonitorsApplication.java as a Spring Boot App
#    • Application expects a database in MySql called "monitors" eg with CREATE SCHEMA `monitors` ; and creates the table "monitor" if not present
#    • initialInsert.sql can be run on MySql to insert 5 sample records
#    • Website can be run with http://localhost:9002/
#	
# Project Details:
#    • Why are we doing this?
#	The is the first assessment of cohorts of the course
#    • How I expected the challenge to go.
#	I knew the Spring method of creating apis well enough to be confident with this aspect.  I was unsure how to call the apis from javascript and have the result displayed in the browser.
#    • What went well?
#	I knew I could complete the task within the allocated time and without the need to work over the weekend.  I did spend some time on Friday evening to view some YouTube videos on the fetch api with javascript.
#    • What didn't go as planned?
#	Fortunately I found a brilliant video on YouTube showing and example of using the Fetch Api and rendering this to html.  Without this I dont think I would have been able to complete the front end side.
#    • Possible improvements for future revisions of the project.
#	Add more fields like product codes, product descriptions, stock quantity
#	Allow selecting monitors items from the list, maybe edit in-situ using some grid control
#	Add JUnit tests
#       Site is for Admin users, add a customer view
#	Allow customer to buy an item with a shopping cart
#	Add security logins
