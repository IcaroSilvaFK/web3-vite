import {
  Container,
  ContainerPrincipal,
  ContainerText,
  ContainerLockup,
  LockupDate,
} from './styles'

export function Home() {
  return (
    <Container>
      <ContainerPrincipal>
        <ContainerText>
          <h2>
            Lorem <span> ipsum.</span>
          </h2>
          <span>Lorem ipsum dolor sit amet.</span>
        </ContainerText>
        <ContainerLockup>
          <div className="ContainerLockup__text">
            <h3>Harvest Lockup</h3>
          </div>
          <div>
            <LockupDate>
              <span>01</span>
              <span>Days</span>
            </LockupDate>
            <LockupDate>
              <span>05</span>
              <span>Hours</span>
            </LockupDate>
            <LockupDate>
              <span>41</span>
              <span>Minutes</span>
            </LockupDate>
            <LockupDate>
              <span>36</span>
              <span>seconds</span>
            </LockupDate>
          </div>
        </ContainerLockup>
      </ContainerPrincipal>
    </Container>
  )
}
