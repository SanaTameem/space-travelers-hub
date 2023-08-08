import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dummyMissions: [
    {
      id: 1,
      mission_name: 'Mission 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur repellendus voluptatibus porro sapiente! Amet nesciunt nostrum perspiciatis minima tenetur cumque aut non corrupti exercitationem illum ipsum a, consequatur sapiente molestiae. Nostrum ipsam exercitationem qui error incidunt dolorum velit accusamus, molestiae doloremque, tempore nisi nesciunt blanditiis autem fuga atque saepe? Sunt laborum minus officia est. Amet fuga officiis accusamus eveniet ipsum.',
      status: 'active',
      Join: 'Join Mission',
    },
    {
      id: 2,
      mission_name: 'Mission 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur repellendus voluptatibus porro sapiente! Amet nesciunt nostrum perspiciatis minima tenetur cumque aut non corrupti exercitationem illum ipsum a, consequatur sapiente molestiae. Nostrum ipsam exercitationem qui error incidunt dolorum velit accusamus, molestiae doloremque, tempore nisi nesciunt blanditiis autem fuga atque saepe? Sunt laborum minus officia est. Amet fuga officiis accusamus eveniet ipsum.',
      status: 'active',
      Join: 'Join Mission',
    },
    {
      id: 3,
      mission_name: 'Mission 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur repellendus voluptatibus porro sapiente! Amet nesciunt nostrum perspiciatis minima tenetur cumque aut non corrupti exercitationem illum ipsum a, consequatur sapiente molestiae. Nostrum ipsam exercitationem qui error incidunt dolorum velit accusamus, molestiae doloremque, tempore nisi nesciunt blanditiis autem fuga atque saepe? Sunt laborum minus officia est. Amet fuga officiis accusamus eveniet ipsum.',
      status: 'active',
      Join: 'Join Mission',
    },
    {
      id: 4,
      mission_name: 'Mission 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur repellendus voluptatibus porro sapiente! Amet nesciunt nostrum perspiciatis minima tenetur cumque aut non corrupti exercitationem illum ipsum a, consequatur sapiente molestiae. Nostrum ipsam exercitationem qui error incidunt dolorum velit accusamus, molestiae doloremque, tempore nisi nesciunt blanditiis autem fuga atque saepe? Sunt laborum minus officia est. Amet fuga officiis accusamus eveniet ipsum.',
      status: 'active',
      Join: 'Join Mission',
    },
  ],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    // Define reducers if needed
  },
});

export default missionsSlice.reducer;
