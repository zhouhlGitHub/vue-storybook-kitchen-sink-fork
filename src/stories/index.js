import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import MyButton from './Button.vue';

storiesOf("Peter's Demo", module)
  .add('first demo', () => ({
    components: { MyButton },
    template: `
      <p>
        <em>Check out more examples here - https://github.com/storybooks/storybook/tree/master/examples/vue-kitchen-sink</em><br/>
        <br/>
        <em>First Demo</em><br/>
        <my-button :rounded="true" :handle-click="action">Let's check out some addons that work with Vue</my-button>
      </p>`,
    methods: {
      action: linkTo('Custom|Method for rendering Vue'),
    },
  }))
  .add('second demo', () => ({
    components: { MyButton },
    template: `
      <p>
        <em>Second, More Complicated Demo</em><br/>
        <my-button :rounded="true" :handle-click="action">Now let's look at different ways to structure your stories</my-button>
      </p>`,
    methods: {
      action: linkTo('Custom|Method for rendering Vue'),
    },
  }));
