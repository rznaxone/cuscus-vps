<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const data = {
  header: "VPS Plans",
  subheader: "Choose the perfect power level for your project. High-performance resources at unbeatable prices.",
  plans: [
    {
      name: "Starter Node",
      price: "$48",
      period: "/ year",
      description: "Perfect for lightweight apps and development.",
      features: [
        "1 vCPU Core",
        "1 GB RAM",
        "25 GB NVMe SSD",
        "1 TB Bandwidth",
        "1 IPv4 Address",
        "Root Access"
      ],
      cardClass: "bg-muted dark:bg-muted-foreground border-2 border-transparent",
      buttonClass: "bg-secondary text-primary hover:bg-secondary/90",
      featured: false
    },
    {
      name: "Performance Node",
      price: "$25",
      period: "/ month",
      description: "High-performance resources for demanding workloads.",
      features: [
        "4 vCPU Cores",
        "8 GB RAM",
        "100 GB NVMe SSD",
        "5 TB Bandwidth",
        "1 IPv4 Address",
        "DDoS Protection"
      ],
      cardClass: "bg-primary border-2 border-secondary shadow-xl scale-105 z-10",
      buttonClass: "bg-secondary text-primary hover:bg-secondary/90",
      featured: true
    }
  ]
};
</script>

<template>
  <section id="pricing" class="mx-auto container px-6 py-20">
    <SectionHeader
      :header="data.header"
      :subheader="data.subheader"
    />

    <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-16 max-w-5xl mx-auto">
      <Card
        v-for="plan in data.plans" :key="plan.name"
        :class="cn('flex flex-col justify-between w-full md:w-1/2 rounded-3xl transition-all duration-300', plan.cardClass)"
      >
        <CardHeader>
          <div v-if="plan.featured" class="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">MOST POPULAR</div>
          <CardTitle class="text-3xl font-bold">{{ plan.name }}</CardTitle>
          <CardDescription :class="plan.featured ? 'text-secondary/80' : 'text-muted-foreground'">{{ plan.description }}</CardDescription>
        </CardHeader>
        
        <CardContent class="flex-grow">
          <div class="mb-8">
            <span class="text-5xl font-extrabold">{{ plan.price }}</span>
            <span class="text-xl opacity-70">{{ plan.period }}</span>
          </div>
          
          <ul class="space-y-4">
            <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3">
              <Icon name="mdi:check-circle" size="20" :class="plan.featured ? 'text-secondary' : 'text-primary'" />
              <span class="font-medium">{{ feature }}</span>
            </li>
          </ul>
        </CardContent>

        <CardFooter>
          <NuxtLink to="/checkout" class="w-full">
            <Button size="lg" :class="cn('w-full rounded-2xl font-bold py-6 text-lg transition-transform hover:scale-[1.02]', plan.buttonClass)">
              Order Now
            </Button>
          </NuxtLink>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>