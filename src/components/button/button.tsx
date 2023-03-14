import styles from './button.module.scss'

type buttonProps = 'send' | 'reply' | 'update'

export default function Button({ type }: { type: buttonProps }) {
  const buttonText = (type: buttonProps) => {
    switch (type) {
      case 'send':
        return 'SEND'
      case 'reply':
        return 'REPLY'
      case 'update':
        return 'UPDATE'
    }
  }

  const handleClick = (type: buttonProps) => {
    console.log(type)
  }

  return (
    <button className={styles.button} onClick={() => handleClick(type)}>
      {buttonText(type)}
    </button>
  )
}
