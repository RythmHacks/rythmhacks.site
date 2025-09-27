"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const tokenFromUrl = searchParams.get('token');
        console.log("Token from URL:", tokenFromUrl);
        if (!tokenFromUrl) {
            toast.error('Invalid reset link');
            router.push('/forgot-password');
        } else {
            setToken(tokenFromUrl);
            console.log("Token set to state:", tokenFromUrl);
        }
    }, [searchParams, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!password || !confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (!token) {
            toast.error('Invalid reset token');
            return;
        }

        setIsLoading(true);

        try {
            console.log("=== RESET PASSWORD DEBUG ===");
            console.log("Token from state:", token);
            console.log("Token length:", token?.length);
            console.log("Token type:", typeof token);
            console.log("Password length:", password.length);
            console.log("Request payload:", { token, password: "[REDACTED]" });
            
            const response = await axios.post('/api/auth/reset-password', {
                token,
                password
            });
            
            console.log("Reset successful, response:", response.data);
            
            toast.success('Password reset successfully!');
            setTimeout(() => {
                router.push('/auth/login');
            }, 2000);
        } catch (error: unknown) {
            console.error("=== RESET PASSWORD ERROR ===");
            console.error("Full error object:", error);
            
            if (error instanceof Error && 'response' in error) {
                const axiosError = error as Error & {
                    response?: {
                        status?: number;
                        data?: { error?: string };
                        headers?: Record<string, string>;
                    };
                };
                console.error("Response status:", axiosError.response?.status);
                console.error("Response data:", axiosError.response?.data);
                console.error("Response headers:", axiosError.response?.headers);
            }
            
            const errorMessage = error instanceof Error && 'response' in error && 
                typeof error.response === 'object' && error.response &&
                'data' in error.response && typeof error.response.data === 'object' &&
                error.response.data && 'error' in error.response.data
                ? String(error.response.data.error)
                : 'Error resetting password';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Toaster />
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Reset your password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your new password below
                    </p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="password" className="sr-only">
                                New password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="New password (min 6 characters)"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirm new password
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Resetting...' : 'Reset password'}
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <Link href="/auth/login" className="text-blue-600 hover:text-blue-500">
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;