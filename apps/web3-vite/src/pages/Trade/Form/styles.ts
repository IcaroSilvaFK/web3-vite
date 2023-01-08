import styled, { css, keyframes } from 'styled-components'

type IFormProps = {
  isSubmitted: boolean
}

const rotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg)
  }
`

export const Form = styled.form<IFormProps>`
  margin: 20px auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  > footer {
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    button {
      width: 100%;
      text-transform: uppercase;
      font-weight: bold;
      padding: 12px 0;
      ${({ isSubmitted }) =>
        isSubmitted &&
        css`
          cursor: not-allowed;
          svg {
            animation: ${rotation} 1s linear infinite;
          }
        `}
    }
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray[600]};
  border-radius: 4px;

  padding: 0 8px;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
  }

  input {
    background: transparent;
    flex: 1;
    min-height: 40px;
    box-shadow: none;
    padding: 0 12px;
    color: ${({ theme }) => theme.colors.gray[100]};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 12px;
  border-radius: 8px;

  label {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.openSans};
  }
`

export const ContainerDescription = styled.div`
  textarea {
    max-width: 576px;
    border-radius: 4px;

    background: ${({ theme }) => theme.colors.gray[600]};
    border: 0;
    resize: none;

    padding: 8px;
    color: ${({ theme }) => theme.colors.gray[100]};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
