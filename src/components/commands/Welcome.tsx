import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`  
  __  __                         _      
 |  \\/  |                       | |     
 | \\  / | ___  ___  __ _ _   _  | |     
 | |\\/| |/ _ \\/ __|/ _\` | | | | | |     
 | |  | |  __/\\__ \\ (_| | |_| | | |____ 
 |_|  |_|\\___||___/\\__,_|\\__, | |______|
                          __/ |         
                         |___/          

  `}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`
  __  __                       
 |  \\/  |                      
 | \\  / | ___  ___  __ _ _   _ 
 | |\\/| |/ _ \\/ __|/ _\` | | | |
 | |  | |  __/\\__ \\ (_| | |_| |
 |_|  |_|\\___||___/\\__,_|\\__, |
                          __/ |
                         |___/ 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.1)</div>
        <Seperator />
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
