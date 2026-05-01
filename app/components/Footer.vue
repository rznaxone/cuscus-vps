<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Separator } from "@/components/ui/separator"

const formSchema = toTypedSchema(z.object({
  email: z.email(),
}));

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
});
</script>

<template>
  <footer class="mx-auto container px-0 md:px-8 pt-5 md:pt-10 text-white">
    <div class="bg-secondary rounded-0 lg:rounded-t-3xl px-10 pt-10">
      <div class="flex justify-center lg:justify-start ">
        <Logo class="bg-primary px-3 py-1 rounded-xl" />
      </div>

      <div class="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:items-start lg:justify-between">
        <div class="flex flex-col items-center lg:items-start gap-y-4">
          <SectionHeader header="Contact Info" />

          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:email" size="20" />
              <span>support@cuscus.vps</span>
            </div>
            
            <div class="flex items-center space-x-2">
              <Icon name="mdi:phone" size="20" />
              <span>+1 (555) 000-0000</span>
            </div>

            <div class="flex items-center space-x-2">
              <Icon name="mdi:location" size="20" />
              <div class="flex flex-col">
                <span>123 Cloud St, Server City,</span>
                <span>TX 75001, USA</span>
              </div>
            </div>
          </div>
        </div>


        <div class="h-full flex flex-col items-center lg:items-end justify-between gap-6 lg:gap-0">
          <div class="space-x-4">
            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:linkedin" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:facebook" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>

            <Button size="icon" class="cursor-pointer rounded-full bg-muted">
              <Icon name="mdi:twitter" size="24" class="text-secondary dark:text-muted-foreground dark:group-hover:text-muted transition-all" />
            </Button>
          </div>

          <form @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>                
                <FormControl>
                  <InputGroup class="border-primary">
                    <InputGroupInput v-bind="componentField" placeholder="Enter your email" />
  
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton variant="default">Subscribe</InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </FormControl>
  
                <FormMessage />
              </FormItem>
            </FormField>
          </form>
        </div>
      </div>

      <Separator class="bg-muted-foreground" />
      
      <div class="py-4">
        <h3 class="flex flex-col sm:flex-row space-x-1">
          <span>
            © {{ new Date().getFullYear() }}
            <span class="text-primary">Cuscus VPS</span>.
          </span>
          <span>All Rights Reserved.</span>
        </h3>
      </div>
    </div>
  </footer>
</template>
