import * as SC from "../../../styled-components/Popups"
import PopupUserData from "../popups/PopupUserData"
import PopupSummary from "../../../../redux_containers/PopupSummary"
import Typography from "../../../styled-components/Typography"

export default function Popup({ 
    showPopup, 
    startGame, 
    clearUserScore, 
    loadNewQuestion,
    popup_to_show,
    startLoading
   }) {
  const handleClose = () => {
    showPopup(false)
    clearUserScore()
  }
  const getNewDatabase = async (difficulty) => {
    handleClose()
    startGame()
    startLoading()
    await loadNewQuestion(difficulty)
  }
  return (
    <SC.Background visibility={true}>
      <SC.PopupContainer>
        <SC.TopBar>
          <SC.Close onClick={() => handleClose()}>&times;</SC.Close>
          <Typography hint uppercase gamefont>
            {popup_to_show === 'userdata'
              ? `Hello gamergeek!`
              : popup_to_show === 'summary'
                ? `Summary`
                : null}
          </Typography>
        </SC.TopBar>
        <SC.Content>
          {popup_to_show === 'userdata'
            ? <PopupUserData 
                gameIsReadyToStart={(difficulty) => getNewDatabase(difficulty)} />
            : popup_to_show === 'summary'
              ? <PopupSummary 
                  close_summary_popup={() => handleClose()}  />
              : null}
        </SC.Content>
      </SC.PopupContainer>
    </SC.Background>
  );
}


