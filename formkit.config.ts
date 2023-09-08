/* export default {
    config: {
      classes: {
        input: '$reset input input-bordered w-full',
        outer: '',
        label: 'label-text',
        help: {
          'bg-red-500': false,
        },
        message: {
          'text-red-500': true,
          'label-text-alt': true,
        },
      }
    }
  } */
  import { generateClasses } from '@formkit/themes'

export default {
  config: {
    classes: generateClasses({
      global: {
        input: '$reset input input-bordered w-full',
        wrapper: '',
        label: 'label-text',
        outer: 'pb-2',
        help: 'label-text-alt',
        message: 'text-red-500 label-text-alt'
      },
      /* text: { // only applies to text input type
        outer: 'bizz',
        input: '$reset fizz'
      }, */
      email: { // only applies to email input type

      },
      select : { // only applies to email input type
        input: 'select select-bordered'
      },
      submit : { 
        input: 'btn btn-primary'
      }
    })
  }
}