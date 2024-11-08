'use client'

import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertDestructive() {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => setIsVisible(false)

  const handleLogin = () => {
    // Implement login logic here
    console.log('Redirecting to login page...')
  }

  if (!isVisible) return null

  return (
    <Alert 
      variant="destructive"
      className="animate-fade-in relative"
      role="alert"
    >
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Session Expired</AlertTitle>
      <AlertDescription>
        Your session has expired due to inactivity. Please log in again to continue using the application.
      </AlertDescription>
      <div className="mt-4 flex justify-end space-x-2">
        <Button variant="outline" size="sm" onClick={handleLogin}>
          Log In
        </Button>
        <Button variant="ghost" size="sm" onClick={handleDismiss}>
          Dismiss
        </Button>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-destructive-foreground/70 hover:text-destructive-foreground"
        aria-label="Close alert"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  )
}