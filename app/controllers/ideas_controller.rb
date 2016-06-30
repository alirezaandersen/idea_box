class IdeasController < ApplicationController
  before_action :all_ideas, only: [:index, :create, :update, :destroy]
  before_action :set_ideas, only: [:edit, :update, :destroy]
  respond_to :html, :js, :json

  def index
    @ideas = Idea.all
  end

  def new
    @idea = Idea.new
  end

  def create
    idea = Idea.create(idea_params)
  end

  def update
    respond_with Idea.update(params[:id], idea_params)
  end

  def destroy
    respond_with Idea.find(params[:id]).destroy
  end

  def upvote
    Idea.upvote(params[:id])
    render nothing: true
  end

  def downvote
    Idea.downvote(params[:id])
    render nothing: true
  end

  private

  def all_ideas
    @ideas = Idea.all
  end

  def set_ideas
    @idea = Idea.find(params[:id])
  end

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end
end
