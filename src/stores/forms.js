// src/stores/forms.js
import { defineStore } from 'pinia'

export const useFormsStore = defineStore('forms', {
  state: () => ({
    contactForm: {
      name: '',
      email: '',
      message: '',
      status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
      error: null
    }
  }),
  
  actions: {
    async submitContactForm(formData) {
      this.contactForm.status = 'submitting'
      try {
        // Here you would make your API call
        // const response = await api.submitForm(formData)
        
        // For now, we'll simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.contactForm.status = 'success'
        this.resetContactForm()
      } catch (error) {
        this.contactForm.status = 'error'
        this.contactForm.error = error.message
      }
    },
    
    resetContactForm() {
      this.contactForm = {
        name: '',
        email: '',
        message: '',
        status: 'idle',
        error: null
      }
    }
  }
})