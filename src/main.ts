import * as core from '@actions/core'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('url');
    core.info('Sending POST request...');
    const data = JSON.parse(core.getInput('data'));
    await axios.post(url, data);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
