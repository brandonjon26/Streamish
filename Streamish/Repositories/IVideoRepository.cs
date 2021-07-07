﻿using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        public List<Video> GetAll();
        public Video GetById(int id);
        public List<Video> GetAllWithComments();
        public void Add(Video video);
        public void Update(Video video);
        public void Delete(int id);
    }
}