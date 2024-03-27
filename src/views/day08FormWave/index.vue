<template>
  <div class="container">
    <div class="form-container">
      <h1>Please Login</h1>
      <!-- form表单中的原生input框加required属性，点击原生button元素会自动校验必填并给出提示 -->
      <form>
        <div class="form-item" :class="{ active: focusEmail, invalid: !isValidEmail }">
          <div class="label">
            <span
              v-for="(letter, index) in 'Email'"
              :key="index"
              :style="{ transitionDelay: `${index * 50}ms` }"
              >{{ letter }}</span
            >
          </div>
          <input
            v-model="email"
            ref="emailRef"
            type="text"
            required
            @focus="focusEmail = true"
            @blur="handleBlur"
            @input="handleInputEmail"
          />
          <!-- <div class="warning">Please fill this form</div> -->
        </div>
        <div class="form-item" :class="{ active: focusPassword, invalid: !isValidPassword }">
          <div class="label">
            <span
              v-for="(letter, index) in 'Password'"
              :key="index"
              :style="{ transitionDelay: `${index * 50}ms` }"
              >{{ letter }}</span
            >
          </div>
          <input
            v-model="password"
            ref="passwordRef"
            type="password"
            required
            @focus="focusPassword = true"
            @blur="handleBlur"
            @input="handleInputPassword"
          />
          <!-- <div class="warning">Please fill this form</div> -->
        </div>
        <button class="btn" @click="handleLogin">Login</button>
        <div class="tip">
          Dont have an account?
          <a href="#">Register</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const email = ref('')
const password = ref('')
const focusEmail = ref(false)
const focusPassword = ref(false)

function handleBlur() {
  isValidEmail.value = true
  isValidPassword.value = true

  if (!email.value) {
    focusEmail.value = false
  }
  if (!password.value) {
    focusPassword.value = false
  }
}

const isValidEmail = ref(true)
const isValidPassword = ref(true)
const emailRef = shallowRef<HTMLDivElement | null>(null)
const passwordRef = shallowRef<HTMLDivElement | null>(null)
function handleLogin() {
  if (!email.value) {
    isValidEmail.value = false
    ;(emailRef.value as HTMLDivElement).focus()
    return
  }

  if (!password.value) {
    isValidPassword.value = false
    ;(passwordRef.value as HTMLDivElement).focus()
  }
}

function handleInputEmail() {
  isValidEmail.value = true
}
function handleInputPassword() {
  isValidPassword.value = true
}
</script>

<style lang="less" scoped>
@formBg: rgba(0, 0, 0, 0.5);
.container {
  background: steelblue;
}
.form-container {
  background: @formBg;
  width: 350px;
  border-radius: 10px;
  margin: 50px auto;
  color: #fff;
  padding: 20px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  input {
    display: inline-block;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid #fff;
    font-size: 18px;
    width: 100%;
    color: #fff;
    padding: 15px 0;
    &:focus {
      border-bottom-color: lightblue;
    }
  }

  .form-item {
    margin-bottom: 30px;
    position: relative;
    .label span {
      display: inline-block;
      transform: translateY(40px);
      // transition: transform 0.3s;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    &.active {
      .label span {
        color: lightblue;
        transform: translateY(0);
      }
    }

    .warning {
      position: absolute;
      bottom: -40px;
      left: 20px;
      padding: 4px;
      background: #fff;
      color: #333;
      border-radius: 4px;
      opacity: 0;
      transition: opacity 0.3s ease-in;
      &::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        position: absolute;
        top: -18px;
        left: 10px;
      }
    }

    &.invalid {
      .warning {
        opacity: 1;
      }
    }
  }

  .btn {
    display: block;
    width: 100%;
    padding: 15px 0;
    background-color: lightblue;
    border-radius: 6px;
    outline: none;
    border: none;
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }

  .tip {
    margin-top: 30px;
  }

  a {
    text-decoration: none;
    color: lightblue;
    outline: none;
  }
}
</style>