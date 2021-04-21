<template>
  <div>
    <div class="form-style-2">
      <form action="">
        <div class="form-style-2-heading">Provide your information</div>

        <div class="form-group">
          <label class="form__label"
            >Фамилия <span class="required">*</span></label
          >

          <div>
            <input
              class="form__input"
              v-model.trim="$v.form.lastName.$model"
              @input="setLastName($event.target.value)"
            />
            <div
              class="error"
              v-if="!$v.form.lastName.required"
              :class="{ 'form-group--error': $v.form.lastName.$error }"
            >
              Field Фамилия is required.
            </div>
            <div
              class="error"
              v-if="!$v.form.lastName.minLength"
              :class="{ 'form-group--error': $v.form.lastName.$error }"
            >
              Field must have at least
              {{ $v.form.lastName.$params.minLength.min }} characters.
            </div>
          </div>
        </div>
        <div>
          {{ $v.form.lastName }}
        </div>
        <div class="form-group">
          <label class="form__label">Имя <span class="required">*</span></label>
          <div>
            <input
              class="form__input"
              v-model.trim="$v.form.firstName.$model"
            />
            <div
              class="error"
              v-if="!$v.form.firstName.required"
              :class="{ 'form-group--error': $v.form.firstName.$error }"
            >
              Field Имя is required.
            </div>
          </div>
        </div>

        <!-- <div>
          <div class="form-group">
            <label class="form__label">Отчество</label>
            <input class="form__input" />
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.birthDate.$error }"
          >
            <label class="form__label"
              >Дата рождения<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.birthDate.$model"
              />
              <div class="error" v-if="!$v.form.birthDate.required">
                Field Дата рождения is required.
              </div>
            </div>
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.mobileNumber.$error }"
          >
            <label class="form__label"
              >Номер телефона<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.mobileNumber.$model"
              />
              <div class="error" v-if="!$v.form.mobileNumber.required">
                Field Номер телефона is required.
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Пол</label>
            <input class="form__input" />
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.clientGroup.$error }"
          >
            <label class="form__label"
              >Группа клиентов<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.clientGroup.$model"
              />
              <div class="error" v-if="!$v.form.clientGroup.required">
                Field Группа клиентов is required.
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Лечащий врач</label>
            <input class="form__input" />
          </div>

          <div class="form-style-2-heading">Адрес</div>
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

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.city.$error }"
          >
            <label class="form__label"
              >Город<span class="required">*</span></label
            >
            <div>
              <input class="form__input" v-model.trim="$v.form.city.$model" />
              <div class="error" v-if="!$v.form.city.required">
                Field Город is required.
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

          <div class="form-style-2-heading">Паспорт</div>
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.documentType.$error }"
          >
            <label class="form__label"
              >Тип документа<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.documentType.$model"
              />
              <div class="error" v-if="!$v.form.documentType.required">
                Field Тип документа is required.
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

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.documentGivenDate.$error }"
          >
            <label class="form__label"
              >Дата выдачи<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.documentGivenDate.$model"
              />
              <div class="error" v-if="!$v.form.documentGivenDate.required">
                Field Дата выдачи is required.
              </div>
            </div>
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.$error }"
          ></div>
          <div class="error" v-if="$v.form.$error">Form is invalid.</div>
        </div> -->

        <!-- <tree-view
        :data="$v.form"
        :options="{ rootObjectKey: '$v.form', maxDepth: 2 }"
      ></tree-view> -->
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        patronymicName: "",
        birthDate: "",
        mobileNumber: "",
        gender: "",
        clientGroup: "",
        doctor: "",
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        documentType: "",
        documentSeries: "",
        documentNumber: "",
        documentGiverBy: "",
        documentGivenDate: "",
      },
    };
  },
  validations: {
    form: {
      lastName: {
        required,
        minLength: minLength(5),
      },
      firstName: {
        required,
        minLength: minLength(5),
      },
      birthDate: {
        required,
      },
      mobileNumber: {
        required,
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
    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$$touch,
      };
    },

    setLastName(value) {
      this.lastName = value;
      this.$v.form.lastName.$touch();
    },
  },
};
</script>
<style>
.form-style-2 {
  /* max-width: 500px; */
  padding: 20px 12px 10px 20px;
  font: 13px Arial, Helvetica, sans-serif;
}
.form-style-2-heading {
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  font-size: 15px;
  padding-bottom: 3px;
}
.form-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.form-group label {
  margin-right: 10px;
  width: 150px;
  font-weight: bold;
}

.required {
  color: red;
}

.error {
  display: none;
}
.form-group--error {
  display: block;
  border-color: red;
  background: #fdd;
}
.error:focus {
  outline-color: #f99;
}
</style>