import { connect } from 'react-redux';

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map(question => {
        return < Question question={question} />
      })}
    </div>
  )
}

const mapStateToProps = () => {

}

const mapActionsToState = () => {

}

const QandAContainer = connect()(QandA);
export default QandAContainer