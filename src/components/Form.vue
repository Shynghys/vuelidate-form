<template>
  <div>
    <div class="form-style">
      <form action="/">
        <div class="form-style-heading">Персональная информация</div>
        <div class="wrapper">
          <div class="form-group">
            <label class="form__label" for="lastName"
              >Фамилия<span class="required">*</span></label
            >

            <div>
              <input
                id="lastName"
                class="form__input"
                v-model.trim="$v.form.lastName.$model"
                type="text"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.lastName.required">
                  Поле Фамилия обязательно.
                </div>
                <div v-if="!$v.form.lastName.minLength">
                  Поле must have at least
                  {{ $v.form.lastName.$params.minLength.min }} characters.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label"
              >Имя<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.firstName.$model"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.firstName.required">
                  Поле Имя обязательно.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Отчество</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label"
              >Дата рождения<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input datepicker-input"
                v-model.trim="$v.form.birthDate.$model"
                type="date"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.birthDate.required">
                  Поле Дата рождения обязательно.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label"
              >Номер телефона<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.mobileNumber.$model"
                type="tel"
                placeholder="7 (777) 777 77 77"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.mobileNumber.required">
                  Поле Номер телефона обязательно.
                </div>
                <div v-if="!$v.form.mobileNumber.numbersOnly">
                  Номер телефона должен состоять как минимум из 8 чисел.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Пол</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label"
              >Группа клиентов<span class="required">*</span></label
            >
            <div>
              <select
                class="picker-input"
                name=""
                id=""
                v-model.trim="$v.form.clientGroup.$model"
                multiple
              >
                <option value="VIP" selected>VIP</option>
                <option value="Проблемные">Проблемные</option>
                <option value="ОМС">ОМС</option>
              </select>
              <div v-if="errors" class="error">
                <div v-if="!$v.form.clientGroup.required">
                  Поле Группа клиентов обязательно.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Лечащий врач</label>
            <select name="" id="" class="picker-input">
              <option value="Иванов" selected>Иванов</option>
              <option value="Захаров">Захаров</option>
              <option value="Чернышева">Чернышева</option>
            </select>
          </div>
        </div>
        <div class="form-style-heading">Адрес</div>
        <div class="wrapper">
          <div class="form-group">
            <label class="form__label">Индекс</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label">Страна</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label">Область</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label"
              >Город<span class="required">*</span></label
            >
            <div>
              <input class="form__input" v-model.trim="$v.form.city.$model" />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.city.required">Поле Город обязательно.</div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Улица</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label">Дом</label>
            <input class="form__input" />
          </div>
        </div>
        <div class="form-style-heading">Паспорт</div>
        <div class="wrapper">
          <div class="form-group">
            <label class="form__label"
              >Тип документа<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.documentType.$model"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.documentType.required">
                  Поле Тип документа обязательно.
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Серия</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label">Номер</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label">Кем выдан</label>
            <input class="form__input" />
          </div>

          <div class="form-group">
            <label class="form__label"
              >Дата выдачи<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input datepicker-input"
                v-model.trim="$v.form.documentGivenDate.$model"
                type="date"
              />
              <div v-if="errors" class="error">
                <div v-if="!$v.form.documentGivenDate.required">
                  Поле Дата выдачи обязательно.
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div><input type="checkbox" checked /> Не отправлять СМС</div>
          </div>
        </div>

        <div>
          <div v-if="errors" class="error">
            Форма не правильно заполнена, заполните и отправьте заного.
          </div>
          <div
            class="error"
            :class="{
              'form-group--error': empty && uiState === 'submit clicked',
            }"
            v-else-if="empty && uiState === 'submit clicked'"
          >
            Форма пуста, необходимо заполнить обязательные поля!
          </div>
          <div v-else-if="uiState === 'form submitted'" class="success">
            Форма была отправлена
          </div>

          <div class="right">
            <button class="button" @click.prevent="submitForm">
              Отправить
            </button>
          </div>
        </div>
      </form>

      <!-- <div>error {{ $v.form.$anyError }}</div>
      <div>error1 {{ $v.form.lastName.$anyError }}</div>
      <div>dirty {{ $v.form.$anyDirty }}</div>
      <pre>{{ $v }}</pre> -->
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      form: {
        lastName: null,
        firstName: null,
        patronymicName: null,
        birthDate: null,
        mobileNumber: null,
        gender: null,
        clientGroup: [],
        doctor: null,
        index: null,
        country: null,
        region: null,
        city: null,
        street: null,
        house: null,
        documentType: null,
        documentSeries: null,
        documentNumber: null,
        documentGiverBy: null,
        documentGivenDate: null,
      },
    };
  },
  validations: {
    form: {
      lastName: {
        required,
        minLength: minLength(3),
      },
      firstName: {
        required,
        minLength: minLength(3),
      },
      birthDate: {
        required,
      },
      mobileNumber: {
        required,

        numbersOnly(mobileNumber) {
          return /[0-9]/.test(mobileNumber) && mobileNumber.length >= 8;
        },
      },
      clientGroup: {
        required,
      },
      city: {
        required,
      },
      documentType: {
        required,
      },
      documentGivenDate: {
        required,
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.form.$touch();
      this.empty = !this.$v.form.$anyDirty;
      this.errors = this.$v.form.$anyError;

      this.uiState = "submit clicked";

      if (this.errors === false && this.empty === false) {
        this.uiState = "form submitted";
      }
    },
  },
};
</script>
<style lang="sass">
.form-style

  justify-content: center
  align-items: center
  position: relative
  top: 50%
  left: 50%
  transform: translate(-50%, 0%)

  padding: 20px
  box-shadow: 0 0 30px rgba(0, 0, 2, 0.5)

  border: 2px #c5d5cd solid
  background: #eeebcc
  max-width: 1000px
  padding: 20px 12px 10px 20px
  font: 13px
  // color: #e3e0cf
  .wrapper
    display: grid
    grid-template-columns: 1fr 1fr
    @media only screen and (max-width: 768px)
      grid-template-columns: 1fr
    @media only screen and (max-width: 1024px)
      grid-template-columns: 1fr

  &-heading
    font-weight: bold
    border-bottom: 2px solid #9fa8a3
    font-size: 17px
    padding-bottom: 13px
    text-align: center

  .form-group
    display: flex
    justify-content: center
    align-items: center
    margin: 20px

    & label
      margin-right: 10px
      width: 150px
      @media only screen and (max-width: 768px)
        width: 80px

  .required
    color: red

  .error
    width: 250px
    position: absolute
    border-color: red
    background: #fdd

  .error:focus
    outline-color: #f99

  .datepicker-input
    cursor: pointer
    box-sizing: border-box
    width: 248px

  .picker-input
    width: 248px

  .right
    display: flex
    justify-content: flex-end

  .button
    border: none
    padding: 13px 25px 13px 25px
    background: #f6b323
    color: #fff
    box-shadow: 1px 1px 4px #DADADA
    cursor: pointer

  .success
    text-transform: uppercase
    font-size: 12px
    color: teal
    position: absolute
</style>