<template>
  <div>
    <div class="form-style-2">
      <form action="/">
        <div class="form-style-2-heading">Provide your information</div>

        <div class="form-group">
          <label class="form__label"
            >Фамилия<span class="required">*</span></label
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
        <!-- <div>
          {{ $v.form.lastName }}
        </div> -->
        <div class="form-group">
          <label class="form__label">Имя<span class="required">*</span></label>
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

        <div>
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
              <div
                class="error"
                v-if="!$v.form.birthDate.required"
                :class="{ 'form-group--error': $v.form.birthDate.$error }"
              >
                Field Дата рождения is required.
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
              <div
                class="error"
                v-if="!$v.form.mobileNumber.required"
                :class="{ 'form-group--error': $v.form.mobileNumber.$error }"
              >
                Field Номер телефона is required.
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
                name=""
                id=""
                v-model.trim="$v.form.clientGroup.$model"
                multiple
              >
                <option value="VIP" selected>VIP</option>
                <option value="Проблемные">Проблемные</option>
                <option value="ОМС">ОМС</option>
              </select>

              <!-- <input
                class="form__input"
                v-model.trim="$v.form.clientGroup.$model"
              /> -->
              <div
                class="error"
                v-if="!$v.form.clientGroup.required"
                :class="{ 'form-group--error': $v.form.clientGroup.$error }"
              >
                Field Группа клиентов is required.
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form__label">Лечащий врач</label>
            <select name="" id="">
              <option value="Иванов" selected>Иванов</option>
              <option value="Захаров">Захаров</option>
              <option value="Чернышева">Чернышева</option>
            </select>
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

          <div class="form-group">
            <label class="form__label"
              >Город<span class="required">*</span></label
            >
            <div>
              <input class="form__input" v-model.trim="$v.form.city.$model" />
              <div
                class="error"
                v-if="!$v.form.city.required"
                :class="{ 'form-group--error': $v.form.city.$error }"
              >
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
          <div class="form-group">
            <label class="form__label"
              >Тип документа<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.documentType.$model"
              />
              <div
                class="error"
                v-if="!$v.form.documentType.required"
                :class="{ 'form-group--error': $v.form.documentType.$error }"
              >
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

          <div class="form-group">
            <label class="form__label"
              >Дата выдачи<span class="required">*</span></label
            >
            <div>
              <input
                class="form__input"
                v-model.trim="$v.form.documentGivenDate.$model"
                type="date"
              />
              <div
                class="error"
                v-if="!$v.form.documentGivenDate.required"
                :class="{
                  'form-group--error': $v.form.documentGivenDate.$error,
                }"
              >
                Field Дата выдачи is required.
              </div>
            </div>
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': $v.form.$error }"
          >
            <button @click.prevent="submitForm">Submit</button>
            <!-- <p v-if="error" class="error">
              The form above has errors, <br />please get your act together and
              resubmit
            </p>
            <p v-else-if="empty && uiState === 'submit clicked'" class="error">
              The form above is empty, <br />cmon y'all you can't submit an
              empty form!
            </p>
            <p v-else-if="uiState === 'form submitted'" class="success">
              Hooray! Your form was submitted!
            </p> -->
            <div class="error" v-if="$v.form.$error">Form is invalid.</div>
          </div>
        </div>
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
    submitForm() {
      this.empty = !this.$v.form.$anyDirty;
      this.errors = this.$v.form.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        //this is where you send the responses
        this.uiState = "form submitted";
      }
    },
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
<style lang="sass">
.form-style-2
  /* max-width: 500px; */
  padding: 20px 12px 10px 20px
  font: 13px Arial, Helvetica, sans-serif

  &-heading
    font-weight: bold
    font-style: italic
    border-bottom: 2px solid #ddd
    font-size: 15px
    padding-bottom: 3px

.form-group
  display: flex
  justify-content: center
  align-items: center
  margin: 20px

  & label
    margin-right: 10px
    width: 150px
    font-weight: bold

.required
  color: red

.error
  display: none

.form-group--error
  display: block
  border-color: red
  background: #fdd

.error:focus
  outline-color: #f99

.datepicker-input
  cursor: pointer
  box-sizing: border-box
</style>