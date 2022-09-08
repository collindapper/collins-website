json.project do
  json.id @project.id
  json.title  @project.title
  json.description @project.description
  json.date_completed @project.date_completed
  json.live_url @project.live_url
  json.github_url @project.github_url
  
  json.images  url_for(@project.images) if @project.images.attached?
  
  json.user do
    json.id @project.user.id
    json.username @project.user.username
  end
end