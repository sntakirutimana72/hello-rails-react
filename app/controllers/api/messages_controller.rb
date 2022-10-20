class Api::MessagesController < Api::ApiController
  def index
    render(json: Message.any)
  end
end
