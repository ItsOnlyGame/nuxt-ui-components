<template>
  <div class="flex flex-col">
    <form @submit.prevent="onSubmit" class="flex flex-col gap-3">
      <div>
        <Input label="Name" v-model="form.name" id="name" :invalid="!!errors?.name" />
        <div v-if="errors?.name" class="ml-2 text-red-600">
          <p v-for="error in errors?.name._errors">{{ error }}</p>
        </div>
      </div>

      <div>
        <Input label="Password" type="password" v-model="form.password" id="password" :invalid="!!errors?.password" />
        <div v-if="errors?.password" class="ml-2 text-red-600">
          <p v-for="error in errors?.password._errors">{{ error }}</p>
        </div>
      </div>

      <div>
        <Checkbox label="Test" v-model="form.checkbox" id="checkbox" :invalid="!!errors?.checkbox" />
        <div v-if="errors?.checkbox" class="ml-2 text-red-600">
          <p v-for="error in errors?.checkbox._errors">{{ error }}</p>
        </div>
      </div>

      <div>
        <Toggle label="Test" v-model="form.toggle" id="toggle" :invalid="!!errors?.toggle" />
        <div v-if="errors?.toggle" class="ml-2 text-red-600">
          <p v-for="error in errors?.toggle._errors">{{ error }}</p>
        </div>
      </div>

      <div>
        <p>This is the zod object schema used to validate this form.</p>
        <pre>
          <code class="lang-js">
            const formSchema = z.object({
              name: z
                .string()
                .min(3, { message: 'Name has to be between 3 and 20 characters' })
                .max(20, { message: 'Name has to be between 3 and 20 characters' }),
              email: z.string().email({ message: 'Invalid email' }),
              password: z.string().min(8, { message: 'Password need to be at least 8 characters long' }),
              checkbox: z.boolean().refine((val) => val, { message: 'Checkbox must be checked' }),
              toggle: z.boolean().refine((val) => val, { message: 'Toggle must be checked' }),
            })
          </code>
        </pre>
      </div>

      <div class="mt-3">
        <Button type="submit">Test form</Button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import z from 'zod'
import Prism from 'prismjs'
import 'prismjs/themes/prism.min.css'

definePageMeta({
  title: 'Form Example',
  description: 'Nuxt UI components - Form Example'
})

interface FormState {
  name: string
  email: string
  password: string
  checkbox: boolean
  toggle: boolean
}

const form = ref<FormState>({
  name: '',
  email: '',
  password: '',
  checkbox: false,
  toggle: false
})

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name has to be between 3 and 20 characters' })
    .max(20, { message: 'Name has to be between 3 and 20 characters' }),
  email: z.string().email({ message: 'Invalid email' }),
  password: z.string().min(8, { message: 'Password need to be at least 8 characters long' }),
  checkbox: z.boolean().refine((val) => val, { message: 'Checkbox must be checked' }),
  toggle: z.boolean().refine((val) => val, { message: 'Toggle must be checked' })
})

type formSchemaType = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<formSchemaType> | null>(null)

const onSubmit = () => {
  const formValid = formSchema.safeParse(form.value)

  if (formValid.success) {
    errors.value = null
  } else {
    errors.value = formValid.error.format()
    return
  }
}

onMounted(() => {
  Prism.highlightAll()
})
</script>