json.projects do
  json.array! @projects do |project|
    json.id               project.id
    json.title            project.title
    json.description      project.description
    json.date_completed   project.date_completed
    json.live_url         project.live_url
    json.github_url       project.github_url
    
    if project.images.attached?
      json.images url_for(project.images)
    else
      json.image nil
    end

  end
end