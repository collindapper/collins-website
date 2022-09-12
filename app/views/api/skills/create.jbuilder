json.skill do
  json.id @skill.id
  json.title  @skill.title
  json.certification_url @skill.certification_url
  json.linkedin_url @skill.linkedin_url
  
  json.user do
    json.id @skill.user.id
    json.username @skill.user.username
  end
end