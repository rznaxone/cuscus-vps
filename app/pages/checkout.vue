<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
    <Navbar />
    
    <div class="max-w-md w-full text-center space-y-6">
      <div class="bg-primary/10 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
        <Icon name="mdi:cart-outline" size="48" class="text-primary" />
      </div>
      
      <h1 class="text-4xl font-bold tracking-tight">Checkout</h1>
      <p class="text-muted-foreground">
        Our custom checkout system is currently under construction. 
        We are preparing a secure and seamless payment experience for you.
      </p>
      
      <div class="pt-6">
        <NuxtLink to="/">
          <Button size="lg" variant="outline">Back to Plans</Button>
        </NuxtLink>
      </div>
    </div>
    
    <Footer class="mt-auto w-full" />
  </div>
</template>