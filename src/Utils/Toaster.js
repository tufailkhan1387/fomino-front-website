import React from 'react';  // Import React if not already imported
import toast, { Toaster } from 'react-hot-toast';

export const success_toaster = (message) => {
    return (
        <>
            <Toaster />
            {toast.success(message)}
        </>
    );
}
export const error_toaster = (message) => {
    return (
        <>
            <Toaster />
            {toast.error(message)}
        </>
    );
}
