import dotenv from 'dotenv';
import axios from 'axios';
import { sendOTP } from './utils/smsService.js';
import mongoose from 'mongoose';

dotenv.config();

// Mock mongoose for standalone testing if needed, or just connect to dev DB
// Since we are just testing the SMS sending part, and it calls saveOtpToDb, 
// we might need a real DB connection or mock it.
// Let's mock saveOtpToDb if we want to avoid DB dependency for this test.

import dotenv from 'dotenv';
import axios from 'axios';
import { sendOTP } from './utils/smsService.js';

dotenv.config();

// Mock console to capture logs if needed
const originalLog = console.log;
const originalError = console.error;

async function runTest() {
    console.log('--- Testing Bulk SMS Integration Mock ---');
    
    // Set environment variables for test
    process.env.SMS_PROVIDER = 'BULK_SMS';
    process.env.USE_MOCK_OTP = 'false'; // We want to see it hit the "real" API logic
    process.env.BULK_SMS_API_KEY = 'TEST_KEY';
    process.env.BULK_SMS_SENDER = 'TEST_SENDER';
    process.env.BULK_SMS_TEMPLATE_NAME = 'TEST_TEMPLATE';

    const testMobile = '1234567890';
    
    console.log('Provider:', process.env.SMS_PROVIDER);
    
    try {
        // Need to mock DB parts in smsService.js
        // Since we can't easily mock imports in ESM without extra tools, 
        // we'll check if we can at least see the logs from sendSmsViaBulkSmsApi.
        
        console.log('Note: This test will fail if it tries to save to DB, but we want to see the "Sending via Bulk SMS API" log.');
        
        // Let's try to call sendOTP and catch the DB error, but check logs before that.
        try {
            await sendOTP(testMobile, 'Customer');
        } catch (dbError) {
            if (dbError.message.includes('buffering timed out') || dbError.message.includes('not connected')) {
                console.log('Caught expected DB error, but check logs above for API call attempt.');
            } else {
                console.error('Unexpected error:', dbError.message);
            }
        }
        
    } catch (error) {
        console.error('Test Failed:', error.message);
    }
}

runTest();

runTest();
