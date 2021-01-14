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
    startLoading,
    user_name,
    user_score,
    newUserName,
   }) {
  const addRecordToMongo = async () => {
      showPopup(false)
      if(user_score.length > 0) {
        const res = await fetch('https://gamergeek-nextjs.vercel.app/api/database', {
          method: 'PUT',
          body: JSON.stringify([{ 
            Name: user_name,
            Date: new Date().toLocaleDateString(),
            Score: user_score.map(score => score = score.score).reduce((acc,score) => acc + score),
          }])
        })
      }
  }
  const getNewDatabase = async (difficulty) => {
    showPopup(false)
    clearUserScore()
    startGame()
    startLoading()
    await loadNewQuestion(difficulty)
  }
  return (
    <SC.Background visibility={true}>
      <SC.PopupContainer>
        <SC.TopBar>
          <SC.Close onClick={() => addRecordToMongo()}>&times;</SC.Close>
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
                gameIsReadyToStart={(difficulty) => getNewDatabase(difficulty)} 
                user={(username) => newUserName(username)}/>
            : popup_to_show === 'summary'
              ? <PopupSummary 
                  close_summary_popup={() => addRecordToMongo()}  />
              : null}
        </SC.Content>
      </SC.PopupContainer>
    </SC.Background>
  );
}


