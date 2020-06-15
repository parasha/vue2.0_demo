import mixin from '../utils/form-item-mixin';
import setDisabled from '../utils/setDiaabled';

import field from './items/field';
import radio from './items/radio';
import checkbox from './items/checkbox';
import picker from './items/picker.vue';

export default {
  mixins: [mixin],
  render(h) {
    const { form_item_config, form, form_item_key } = this;
    const { type, ifDiasbled } = form_item_config;
    // 设置表单项不可改
    if (ifDiasbled && typeof ifDiasbled == 'function') {
      setDisabled(ifDiasbled, form_item_config, form)
    }
    switch (type) {
      case 'field':
        return h(field, { props: { form_item_config, form, form_item_key } })
      case 'radio':
        return h(radio, { props: { form_item_config, form, form_item_key } })
      case 'checkbox':
        return h(checkbox, { props: { form_item_config, form, form_item_key } })
      case 'picker':
        return h(picker, { props: { form_item_config, form, form_item_key } })
    }
  },
}