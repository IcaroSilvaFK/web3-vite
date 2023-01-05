import styled from 'styled-components'

export const Container = styled.div`
  header {
    ul {
      display: flex;
      gap: 6px;
      font-family: ${({ theme }) => theme.fonts.openSans};
      li:last-child {
        color: ${({ theme }) => theme.colors.green[500]};
        text-decoration: underline;
      }
    }
  }
`

export const Form = styled.form`
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
  }
`
