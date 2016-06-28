module Api
  module V1
    module Ideas
      class IdeasController < ApiController
        def create
          idea = Idea.create(idea_params)
          respond_with :api, :v1, idea
        end

        def update
          respond_with Idea.update(params[:id], idea_params)
        end

        def destroy
          respond_with Idea.find(params[:id]).destroy
        end

        private

        def idea_params
          params.require(:idea).permit(:title, :body, :quality)
        end
      end
    end
  end
end
