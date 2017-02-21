var RequestBox = React.createClass({
  render: function () {
    return (
      <div className={this.props.segmentClass}>
        <h4 className="ui header">
          Queue
          <RequestCountLabel count={this.props.requests.length} />
        </h4>
        <RequestList
          requests={this.props.requests}
          currentUserId={this.props.currentUserId}
          currentGroupId={this.props.currentGroupId}
          resolve={this.props.resolve}
          bump={this.props.bump} />
      </div>
    );
  }
});
